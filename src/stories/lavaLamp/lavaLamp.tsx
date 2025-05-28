import { request } from 'http';
import './lavaLamp.css';


const runLavaLamp = () => {
    let isSetup = false; 
    const COLORS = [[204, 85, 0], [233, 116, 81], [227, 150, 62], [242, 140, 40]]

    const setup = () => {

         const fillContainer = document.getElementById('lavaContainer')

         if(!fillContainer) {
            isSetup = false
            return
         }

        let blobs = new Array(500).fill({}).map(_ => ({x : Math.ceil(Math.random() * 100), y: Math.ceil(Math.random() * 400)}));

        blobs.forEach(blob => {
            let color = COLORS[Math.floor(Math.random() * 4)]
            let size = Math.floor(Math.random() * 30)
            let blobElement = document.createElement('div')
            // @ts-ignore
            blobElement.style.top = blob.y + 'px'
            blobElement.style.background = 'rgb(' + color.join(',') + ')';
            blobElement.style.width = size + 'px'
            blobElement.style.height = size + 'px'
            // @ts-ignore
            blobElement.style.left = blob.x + 'px'
            blobElement.setAttribute("class", "blob");
            blobElement.style.setProperty('--blur', `${Math.ceil(Math.random() * 5)}px`);
            blobElement.style.setProperty('--speedOfBubble', `${Math.ceil(Math.random() * 10)}px`);
            blobElement.style.setProperty('--speedOfAnimation', `${Math.ceil(Math.random() * 10) + 5 }s`);
            blobElement.style.setProperty('--y', `${blob.y}px`);
            fillContainer.appendChild(blobElement)
        })  
        isSetup = true
    }

    const update = () => {}

    const draw = () => {

    }

    const loop = () => {
        console.log('howdy', isSetup)
        if(!isSetup) {
            setup()
        } 

        if(isSetup) {
            return
        }


        requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)
}
runLavaLamp()


export const LavaLamp = () => {

 return (
    <div className="backDrop"> 
        <div className="cone top"></div>
        <div className='fill' id='lavaContainer'>
            <div className='blob' data-x="0" data-speed="6"></div>
             <div className='blob' data-x="0" data-speed="2"></div>
        
        </div>
        <div>
            <div className="cone bottom"></div>
            <div className='base'></div>
        </div>

    </div>
 )
} 