import Header from "@/app/components/Header";


// AdminLayout.js

export default function AdminLayout({ children }) {
  return (
    <div>
     <Header />
      {children}
    </div>
  );
}
