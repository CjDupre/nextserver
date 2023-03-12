aws cloudformation deploy \
    --template-file ./build/output.yml \
    --stack-name screencache-landing-api \
    --capabilities CAPABILITY_IAM