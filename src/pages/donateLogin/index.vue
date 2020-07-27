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
                <button type="none" @tap="hadnleRegister">注册</button>
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
                                url: `/pages/donateList/index?name=${res.data.data.name}&userId=${res.data.data.userId}`
                            });
                        });
                    }
                    else if (res.data.status === 100102) {
                        Taro.showModal({
                            title: '用户不存在',
                            content: '是否需要注册？',
                            success (res) {
                                if (res.confirm) {
                                    Taro.redirectTo({
                                        url: '/pages/donateRegister/index'
                                    });
                                } else if (res.cancel) {
                                console.log('用户点击取消')
                                }
                            }
                        })
                    }
                    else {
                        Taro.showToast({
                            title: res.data.msg,
                            icon: 'none',
                            duration: 2000
                        });
                    }
                }
            });
        },
        hadnleRegister() {
            Taro.redirectTo({
                url: '/pages/donateRegister/index'
            });
        }
    }
};
</script>

<style lang="less">
.donate-title {
    text-align: center;
    font-size: 1.5rem;
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
            width: calc(50% - 12px);
        }
    }
}
</style>