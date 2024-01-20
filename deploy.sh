export AWS_PAGER=""

# This is for illustrative purposes.  You should be using a proper deployment workflow, not uploading from your local rig.

# You'll need to provide AWS credentials or you'll need to be on an EC2 with appropriate role.

STAMP="$(date +%m-%d-%Y-%H.%M.%S)"

zip -r deployments/my_lambda_function-$STAMP.zip routes controller classes node_modules package.json index.js

aws --no-paginate --region=us-east-1 lambda update-function-code --function-name my_lambda_function --zip-file fileb://deployments/my_lambda_function-$STAMP.zip
echo
echo

echo Waiting for function to update
aws --no-paginate --region=us-east-1 lambda wait function-updated --function-name my_lambda_function
echo
echo
