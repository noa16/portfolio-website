import imgTicketCover from '../Images/ticketWebsite.PNG'
import imagesStudyTogether from '../Images/collageStudyTogether.jpg'
import studyTogetherCover from '../Images/StudyTogether.PNG'
import ticketCollage from '../Images/ticketCollage.jpg'
const data = [
  
    {
        text: 'I built a site that helps students find learning groups by having students who study together advertise on the site where they study, where and when And students who feel alone can come and chat with them if they have trouble with homeworkI used side by side with node js using socket.io to realize the chat And next to the client I used react, js and i used mongodb as a database',
        date: 'June 2019',
        technology:['Node.js','Java Script','MongoDB','Redux','React Router','css','ReduxThunk'],
         img:studyTogetherCover,
         images:imagesStudyTogether,
        category: {
			tag: 'blog',
			color: '#e17b77'
		},
      
            url: 'https://github.com/noa16/studyTogether'
            
        
    },
    {
        text: 'Website for purchase/sale ticket',
        date: 'March 07 2019',
        technology:['Postgresql ','Java Script','Node.js','Axios','Context API','React Hooks','React.js','React Router','css'],
         img:imgTicketCover,
         images:ticketCollage,
        category: {
			tag: 'twitter',
			color: '#1DA1F2'
		},
    
        url: 'https://github.com/noa16/sale-purchase-ticket',
            
        
    },
  
]
export default data