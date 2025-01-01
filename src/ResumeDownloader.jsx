
import resume from '/MyResume.pdf'
import resumeImg from '/resume.png'
function ResumeDownloader(){
    
    function handleClick(){
        const filepath=resume
        const a = document.createElement("a");
        a.href = filepath; // Set the href to the resume file path
        a.download = "My_Resume.pdf"; // Set the file name for download
    
        // Append the <a> element to the body
        document.body.appendChild(a);
    
        // Trigger the download
        a.click();
    
        // Clean up
        document.body.removeChild(a);
    }

    return(
        <div className='ResumeSection'>
            <img src={resumeImg} alt="Resume" />
        <button  onClick={handleClick}>
            
            Download My Resume 
        </button>
        </div>
    );
}


export default ResumeDownloader