if [[ "${ENV}" = "PROD" ]]; then
  npm run build
  npm start
else
  npm install
  npm run dev
fi