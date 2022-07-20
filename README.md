npx create-next-app@latest ./ --ts

sanity-backend
npm install -g @sanity/cli
sanity init --coupon javascriptmastery2022
cd sanity-backend
sanity start

npm install --legacy-peer-deps
npm run dev

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
yarn add @react-oauth/google jwt-decode
