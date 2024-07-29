import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Import CSS module for styling
import Unavbar from './Unavbar';
import Footer from '../Components/Footer';

function Uhome() {
  return (
    <div>
        <Unavbar/>
        <div  style={{display:"flex",justifyContent:"space-around", backgroundColor:"#ebebeb"}}>
        <div style={{fontStyle:"italic",position:"absolute",top:"170px",left:"280px"}}>
    <h1 style={{color:"red",fontSize:"38px"}}>Welcome to Pet Care</h1>
    <p style={{fontSize:"25px"}}>Every Pet Deserves
        <br/>
      <strong style={{fontSize:"30px"}}>Celebrity Care</strong>  
    </p>
    <p style={{paddingTop:"5px",paddingBottom:"10px"}}>At Pet Wellness and Grooming, we are dedicated  to<br/> the holistic care  and happiness of your beloved pets.<br/> Our services encompass a comprehensive approach to  <br/>pet well-being, focusing not only on grooming <br/> but also on nurturing their  overall health and vitality...</p>
    <Link to="/ugroom" className={styles.btnPrimary} style={{fontStyle:"initial"}}>Explore Our Services</Link>
  </div>
<div >
  <img src='https://freerangestock.com/sample/142764/happy-woman-and-her-beautiful-white-dog.jpg' style={{ width: "780px", height: "95%",mixBlendMode:"multiply"}} />
 </div>
</div>


        
    <div className={styles.container}>
      <section className={styles.featuredProducts}>
        <h2 style={{fontSize:"30px",display:"flex",justifyContent:"center"}}>Featured Products</h2>
      <div style={{marginLeft:"670px"}}>
      <div style={{backgroundColor:"pink",width:"250px"}}>
        <p style={{color:"pink",display:"flex",justifyContent:"center",fontSize:"5px"}}>k</p>
       </div>
      </div>
      <div style={{marginLeft:"600px",paddingTop:"2px"}}>
      <div style={{backgroundColor:"pink",width:"250px"}}>
        <p style={{color:"pink",display:"flex",justifyContent:"center",fontSize:"5px"}}>k</p>
       </div>
      </div>
        <div className={styles.productList}>
          {/* Featured products */}
          <div className={styles.product}>
            <img src="https://rukminim2.flixcart.com/image/416/416/kidgnm80-0/pet-food/s/g/q/cat-931058-drools-original-imafy6dzprffve5j.jpeg?q=70&crop=false" alt="Product 1" style={{height:"250px"}} />
            <h3 className='text-center'>Product 1</h3>
            <p style={{color:"grey"}}>Drools Dry Kitten Food with Ocean Fish is a complete and balanced feed for kitten.</p>
          </div>
          <div className={styles.product}>
            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/pet-food/f/v/g/-original-imagkgg3xtwgnejz.jpeg?q=70&crop=false" alt="Product 2" style={{height:"250px"}} />
            <h3 className='text-center'>Product 2</h3>
            <p style={{color:"grey"}}>With Pedigree for adult dogs (chicken and liver chunks flavoured gravy), your furball will be follow.</p>
          </div>
          <div className={styles.product}>
            <img src="https://rukminim2.flixcart.com/image/416/416/kwwfte80/pet-muzzle/m/d/a/b081fgd5n2-dogista-pet-products-original-imag9gvjsweraqht.jpeg?q=70&crop=false" alt="Product 3" style={{height:"250px"}} />
            <h3 className='text-center'>Product 3</h3>
            <p style={{color:"grey"}}>Muzzle is one of the best comfortable mouth muzzle. Adjustable strap with buckle, easy to put on.</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2 style={{fontSize:"30px"}}>About Us</h2>
          <div style={{marginLeft:"670px"}}>
      <div style={{backgroundColor:"pink",width:"250px"}}>
        <p style={{color:"pink",display:"flex",justifyContent:"center",fontSize:"5px"}}>k</p>
       </div>
      </div>
      <div style={{marginLeft:"600px",paddingTop:"2px"}}>
      <div style={{backgroundColor:"pink",width:"250px"}}>
        <p style={{color:"pink",display:"flex",justifyContent:"center",fontSize:"5px"}}>k</p>
       </div>
       </div>
          <br/>
          <p>
At Pet Wellness and Groom, we're passionate about providing top-notch care for your furry companions. Our dedicated team of professionals is committed to ensuring that your pet receives the highest quality grooming and wellness services in a safe and comfortable environment.
With years of experience in the pet care industry, we understand the importance of holistic pet care. That's why we offer a wide range of services designed to cater to your pet's unique needs, from grooming and wellness to boarding and daycare</p>
          <br/>
        </div>
      </section>

          <Footer/>   
   </div>
    </div>
  );
}

export default Uhome;
