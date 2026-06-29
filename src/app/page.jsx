import Categories from "@/components/home/Categories";
import CustomerReviews from "@/components/home/CustomerReviews";
import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import WhyChoice from "@/components/home/WhyChoice";



export default function Home() {
  return (
    <div className="">
      
     <section>
      <Hero></Hero>
     </section>

     <section>
      <WhyChoice></WhyChoice>
     </section>

     <section>
      <PopularProducts></PopularProducts>
     </section>

     <section>
      <Categories></Categories>
     </section>

     <section>
      <CustomerReviews></CustomerReviews>
     </section>
      
    </div>
  );
}
