<template>
  <view class="certificate-container">
      <view class="certificate">
          <view class="header">捐赠证书</view>
          <view>尊敬的 {{certificateData.donorName}} 先生/女士：</view>
          <view class="desc">感谢您对于贫困人员捐出的<text style="color:orange">{{certificateData.quantity}}元。</text></view>
          <view class="desc"><text class="cert-code">爱心码为 {{certificateData.certCode}} ，凭爱心码可以于追溯平台查找查询，请妥善保管。</text></view>
          <view class="desc">特颁此证！</view>
          <view class="enterprise">扶贫捐助信息平台</view>
          <view class="data">{{certificateData.donateTime | dayFormat}}</view>
      </view>
  </view>
</template>

<script>
import './index.less'
import moment from 'moment'
import {getCurrentInstance} from '@tarojs/taro'

export default {
  data () {
    return {
      certificateData: {}
    }
  },
  filters: {
      dayFormat(value) {
          return moment(+value).format('YYYY-MM-DD');
      }
  },
  onReady (options) {
    console.log('onReady')
    console.log(getCurrentInstance().router.params)
    const params = getCurrentInstance().router.params;
    this.certificateData = {
      donorName: params.donorName,
      quantity: params.quantity,
      certCode: params.certCode,
      donateTime: params.donateTime
    };
  },
  methods: {
  }
}
</script>

<style lang="less">
  .certificate-container {
    position: fixed;
  width: 100%;
    display: inline-block;
    top: 50px;
    z-index: 10;
    left: 0;
    right: 0;
    background-color: #fff;
    .certificate {
      padding: 40px;
      .header {
        font-size: 50px;
        text-align: center;
        margin-bottom: 20px;
      }
      .enterprise,
      .data {
        text-align: right;
      }
      .cert-code {
        display: inline;
      }
    }
  }
</style>
