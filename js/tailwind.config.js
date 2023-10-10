tailwind.config = {
    theme: {
      extend: {
        // My Custom code start 
       
        // All color part start 
        colors:{
          headercolor:"rgba(28, 30, 83, 1)",
          hovercolorone:"#FCD980",
          hovercolortwo:"rgba(107, 98, 197, 1)",
          overlycolor:"rgba(106, 98, 197, 0.90)",
          menutextcolor:"#BBBBCB",
          howtextcolor:"#rgba(40, 41, 56, 1)",
          howtextcolortwo:"#2405F2",
          Fbgcolorone:"rgba(244, 246, 252, 1)",
          Fbgcolor:"rgba(255, 255, 255, 1)",
          Aboutbgcolor:"rgba(255, 255, 255, 0.50)",
          buttoncolor:"rgba(82, 57, 250, 1)",
          overlycolortwo:"rgba(28, 30, 83, 0.98)",
          arrow_btncolor:"rgba(82, 57, 250, 1)",
          inbgcolor:"rgba(28, 30, 83, 100)",
          fontcolor:"rgba(244, 246, 252, .50)",
        },
        // All color part end
        // All containers start
        maxWidth: {
          headercontainer: '1320px',
         

        },
        // All containers end 
        // Font Family
        fontFamily: {
          Popin: ['Poppins', 'sans-serif'],
          Man: ['Manrope', 'sans-serif'],
         
        },
        // Font Family
        // Background Images Start
        backgroundImage: {
          bannerbg: "url('Images/howbg.jpg')",
        
          
        },
        // Background Images End
        // My Custom code End 
      }
    }
  }