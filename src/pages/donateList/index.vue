<template>
  <view class="donate-list-container">
    <view class="donate-list-title">扶贫捐赠服务平台</view>
    <view class="donate-form">
      <view class="form-item name">
        <view class="label">姓名</view>
        <view class="body"><input type="text" class="input"></view>
      </view>
      <view class="form-item money">
        <view class="label">捐赠金额</view>
        <view class="body"><input type="text" class="input"></view>
      </view>
      <view class="form-item anonymous">
        <view class="label">匿名</view>
        <view class="body">
          <radio-group>
            <radio name="anonymous">是</radio>
            <radio name="anonymous">否</radio>
          </radio-group>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.less'

export default {
  data () {
    return {
      msg: 'Hello world!'
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
      .form-item {
        display: flex;
        .label {
        }
        .body {
        }
      }
    }
  }
</style>