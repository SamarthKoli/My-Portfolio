function Footer(){
    let currentDate=new Date();
    return(
       
       <footer className="footer">
         <h3>&copy; {currentDate.getFullYear()} Samarth Koli</h3>
       </footer>

    );
}

export default Footer
