import Header from "@/app/components/Header";




export default function AdminLayout({ children }) {
  return (
    <div>
     <Header />
      {children}
    </div>
  );
}
