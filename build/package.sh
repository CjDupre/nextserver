aws cloudformation package \
    --template-file ./build/deploy.yml \
    --output-template-file ./build/output.yml \
    --s3-bucket screencache-landing-api