<template>
  <view class="donate-list-container">
    <cover-image :src="hlepPoor"></cover-image>
    <view class="donate-form">
        <view class="form-item money">
          <view class="label">捐款金额</view>
          <radio-group class="money-radio" @change="handleRadio">
            <radio v-for="(item, index) in radioItem" v-model="form.moneyRadio" v-bind:key="index" :checked="item.checked" :value="item.value" class="radio-item">{{item.name}}</radio>
          </radio-group>
          <view class="body">
            <input
              type="number"
              class="input"
              placeholder="其他金额,请在这里填写"
              @focus="foucsHandle"
              @input="inputHandle('money')"
              v-model="form.money">
          </view>
          <view s-if="error.money" class="error-tips">{{error.money}}</view>
        </view>
        <view class="form-item name">
          <view class="label">捐款署名</view>
          <view class="body">
            <input
              type="text"
              class="input"
              @input="inputHandle('name')"
              placeholder="您的署名将出现在扶贫溯源服务平台"
              v-model="form.name">
          </view>
          <view s-if="error.name" class="error-tips">{{error.name}}</view>
        </view>
        <view class="form-item telephone">
          <view class="label">手机号码</view>
          <view class="body">
            <input
              type="number"
              class="input"
              @input="inputHandle('telephone')"
              placeholder="您的手机号不会对外公布,仅在必要性联系时使用"
              v-model="form.telephone">
          </view>
          <view s-if="error.telephone" class="error-tips">{{error.telephone}}</view>
        </view>
        <view class="form-item remark">
          <view class="label">爱心寄语</view>
          <view class="body">
            <input
              type="text"
              class="input"
              @input="inputHandle('remark')"
              placeholder="说点鼓励的话吧~"
              v-model="form.remark">
          </view>
          <view s-if="error.remark" class="error-tips">{{error.remark}}</view>
        </view>
        <view class="form-item anonymous">
          <view class="body">
            <radio-group @change="handleAnonymous">
              <radio value="0" v-model="form.anonymous" :checked="form.anonymous === '0'">实名</radio>
              <radio value="1" v-model="form.anonymous" :checked="form.anonymous === '1'">匿名</radio>
            </radio-group>
          </view>
        </view>
      <button @tap="submitForm">确定募捐</button>
    </view>
  </view>
</template>

<script>
import './index.less'
import hopeProject from '../../asserts/image/hope-project.jpeg'
import hlepPoor from '../../asserts/image/help-poor.jpg'
import Taro from '@tarojs/taro'
import {getCurrentInstance} from '@tarojs/taro'

export default {
  data () {
    return {
      buttons: [{text: '取消'}, {text: '确定'}],
      userId: '',
      hopeProject,
      hlepPoor,
      form: {
        moneyRadio: '',
        name: '',
        remark: '',
        money: '',
        telephone: '',
        remark: '',
        anonymous: '0'
      },
      error: {
        name: '',
        remark: '',
        money: '',
        telephone: '',
        remark: ''
      },
      radioItem: [
        {
          name: '100元',
          value: '100',
          checked: false
        },
        {
          name: '500元',
          value: '500',
          checked: false
        },
        {
          name: '2000元',
          value: '2000',
          checked: false
        },
        {
          name: '其他',
          value: 'other',
          checked: false
        }
      ]
    }
  },
  onReady (options) {
    console.log('onReady')
    console.log(getCurrentInstance().router.params)
    const params = getCurrentInstance().router.params;
    this.form.name = params.name;
    this.userId = params.userId;
  },
  methods: {
    handleRadio(e) {
      console.log(e)
      this.error.money = '';
      this.form.money = '';
      if (e.detail && e.detail.value) {
        this.form.moneyRadio = e.detail.value;
      }
    },
    handleAnonymous(e) {
      console.log(e)
      if (e.detail && e.detail.value) {
        this.form.anonymous = e.detail.value
      }
    },
    foucsHandle(e) {
      const items = this.radioItem;
      for (let i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value === 'other'
      };
      this.radioItem = JSON.parse(JSON.stringify(items));
      this.form.moneyRadio = 'other';
      console.log(this.form)
    },
    inputHandle(name) {
      this.error[name] = '';
    },
    verify() {
      const form = this.form;
      let flag = true;
      if (!form.moneyRadio || form.moneyRadio === 'other' && !form.money) {
        this.error.money = '请选择/输入捐款金额~';
        flag = false;
      } else {
        this.error.money = '';
      }
      if (!form.name) {
        this.error.name = '请选输入捐款署名~';
        flag = false;
      } else {
        this.error.name = '';
      }
      if (!form.telephone) {
        this.error.telephone = '请选输入手机号码~';
        flag = false;
      } else {
        this.error.telephone = '';
      }
      if (!form.remark) {
        this.error.remark = '请选输入爱心寄语~';
        flag = false;
      } else {
        this.error.remark = '';
      }
      return flag;
    },
    submitForm() {
      console.log(this.form)
      const flag = this.verify();
      if (flag) {
        // Taro.requestPayment({
          //   timeStamp: (new Date()).getTime().toString(),
        //   nonceStr: '	5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
        //   package: 'fe0db70013231072',
        //   signType: 'MD5',
        //   paySign: '22D9B4E54AB1950F51E0649E8810ACD6',
        //   success: function (res) { },
        //   fail: function (res) { }
        // })
        Taro.request({
          url: 'http://122.112.158.98:8149/donate/submit',
          method: 'POST',
          data: {
            loginId: this.userId,
            isAnonymous: this.form.anonymous,
            details: [
              {
                name: '善款',
                type: '1',
                unit: '元',
                quantity: this.form.moneyRadio === 'other' ? this.form.money : this.form.moneyRadio
              }
            ]
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: res => {
            console.log(res.data)
            this.certificateData = {
              donorName: res.data.data.donorName,
              quantity: res.data.data.quantity,
              certCode: res.data.data.certCode,
              donateTime: res.data.data.donateTime
            };
            console.log(this.certificateData)
            Taro.redirectTo({
                url: `/pages/certificate/index?donorName=${res.data.data.donorName}&quantity=${res.data.data.quantity}&certCode=${res.data.data.certCode}&donateTime=${res.data.data.donateTime}`
            });
          }
        })
      }
    }
  }
}
</script>

<style lang="less">
  .donate-list-container {
    .donate-list-title {
      text-align: center;
      font-size: 50px;
    }
    .donate-form {
      padding: 40px;
      .form-item {
        margin-bottom: 32px;
        .money-radio {
          padding: 0 20px 20px;
        }
        .label {
          margin-left: 20px;
          margin-bottom: 20px;
        }
        .body {
          input {
            border: 1px solid #aaa;
            border-radius: 30px;
            font-size: 32px;
            padding: 0 20px;
          }
          .radio-item {
            padding-right: 300px;
          }
        }
        .error-tips {
          color: #ff5b5b;
          margin-top: 10px;
          margin-left: 20px;
        }
      }
    }
  }
</style>