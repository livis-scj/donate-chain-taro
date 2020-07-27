<template>
  <view>
      <view class="donate-title">扶贫捐赠平台</view>
      <view class="donate-login">
          <form @submit="handleSubmit">
              <view class="form-item">
                  <view class="form-label">用户名：</view>
                  <view class="form-value">
                      <input name="userName" placeholder="请输入用户名" label="用户名">
                  </view>
              </view>
              <view class="form-item">
                  <view class="form-label">密码：</view>
                  <view class="form-value">
                      <input name="password" placeholder="请输入密码" type="password" label="用户名">
                  </view>
              </view>
              <view class="form-item">
                  <button type="primary" form-type="submit">登录</button>
              </view>
          </form>
      </view>
  </view>
</template>

<script>
import './index.less';
import Taro from '@tarojs/taro';
export default {
    methods: {
        handleSubmit(e) {
            const params = e.detail.value;
            Taro.request({
                url: 'http://122.112.158.98:8149/donor/login',
                data: params,
                method: 'POST',
                success: function (res) {
                    if (res.data.status === 0) {
                        Taro.showToast({
                            title: '登录成功',
                            icon: 'success',
                            duration: 2000
                        }).then(() => {
                            Taro.redirectTo({
                                url: '/pages/donateList/index'
                            });
                        });
                    }
                }
            });
        }
    }
};
</script>

<style lang="less">
.donate-title {
    text-align: center;
    font-size: 2rem;
    margin-top: 4rem;
}
.donate-login {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    .form-item {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 2rem;
        .form-label {
            width: 8rem;
        }
        .form-value {
            border: 1px solid #000;
            width: 80%;
            input {
                text-indent: 8px;
            }
        }
        button {
            width: 100%;
        }
    }
}
</style>