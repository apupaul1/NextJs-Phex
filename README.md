# 📱 Phone Gallery - Next.js 15 App

## 📝 Project Description
Phone Gallery is a simple web application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
It allows users to browse phone products, view detailed information, and (after logging in) access a protected dashboard to add new phones.

## ⚙️ Setup & Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/phone-gallery.git
   cd phone-gallery
   npm install
2. **Configure environment variables**
Create a .env.local file in the root directory with the following:
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
3. **Run the Deployment Server**
    npm run dev

**Route Summary**

| Route                     | Access           | Description                                     |
| ------------------------- | ---------------- | ----------------------------------------------- |
| `/`                       | Public           | Landing Page (Navbar, Hero, Highlights, Footer) |
| `/login`                  | Public           | Login with NextAuth.js (Google/Credentials)     |
| `/products`               | Public           | List of all phones                              |
| `/products/[id]`          | Public           | Phone details page                              |
| `/dashboard/add-product`  | Protected (Auth) | Add new phone (requires login)                  |
--------------------------------------------------------------------------------------------------

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
