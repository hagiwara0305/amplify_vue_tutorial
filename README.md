### サービスにデプロイ
`amplify push`

### アプリケーションを自動でビルドしクラウドにデプロイ
`amplify publish`

### aws-exports.jsを設定
```
const awsmobile = {
    "aws_project_region": "ap-northeast-1",
    Auth: {
        region: "ap-northeast-1",
        userPoolId: xxxx,
        userPoolWebClientId: xxxx
    }
};

export default awsmobile;
```