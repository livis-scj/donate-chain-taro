<template>
  <view>
      <view class="donate-register">
          <form @submit="handleSubmit">
              <view class="form-item">
                  <view class="form-label">用户名：</view>
                  <view class="form-value">
                      <input name="userName" placeholder="请输入用户名">
                  </view>
              </view>
              <view class="form-item">
                  <view class="form-label">密码：</view>
                  <view class="form-value">
                      <input name="password" placeholder="请输入密码" type="password">
                  </view>
              </view>
              <view class="form-item">
                  <view class="form-label">姓名：</view>
                  <view class="form-value">
                      <input name="name" placeholder="请输入密码">
                  </view>
              </view>
              <view class="form-item">
                  <view class="form-label">身份证号：</view>
                  <view class="form-value">
                      <input name="idcard" placeholder="请输入密码">
                  </view>
              </view>
              <view class="form-item">
                  <view class="form-label">手机号：</view>
                  <view class="form-value">
                      <input name="mobile" placeholder="请输入密码">
                  </view>
              </view>
              <view class="form-item">
                  <button type="primary" form-type="submit">注册</button>
              </view>
          </form>
      </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
export default {
    methods: {
        handleSubmit(e) {
            const params = e.detail.value;
            Taro.request({
                url: 'http://122.112.158.98:8149/donor/register',
                data: params,
                method: 'POST',
                success: function (res) {
                    if (res.data.status === 0) {
                        Taro.showToast({
                            title: '注册成功',
                            icon: 'success',
                            duration: 2000
                        }).then(() => {
                            Taro.request({
                                url: 'http://122.112.158.98:8149/donor/login',
                                data: {
                                    userName: params.name,
                                    password: params.password
                                },
                                method: 'POST',
                                success: function(res) {
                                    Taro.redirectTo({
                                        url: `/pages/donateList/index?name=${res.data.data.name}&userId=${res.data.data.userId}`
                                    });
                                }
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
.donate-register {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    form {
        width: 100%;
    }
    .form-item {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 2rem;
        min-height: 46px;
        padding: 0 2rem;
        .form-label {
            width: 8rem;
            padding-right: 15px;
        }
        .form-value {
            flex: 1;
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