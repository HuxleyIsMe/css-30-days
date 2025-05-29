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

        /**
         * Here we create our blobs of lava
         * then we give them each random values for certain props that our CSS can use
         */
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


    const loop = () => {
        if(!isSetup) {
            setup()
        } 
        if(isSetup) {
            // no more animation loop
            return
        }
        requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)
}

/**
 * CSS will handle the animation how ever i need a way to draw my JS 
 * im piggy backing animationLoop just a callback method to say hey has my component 
 * been mounted yet? if so generate my blobs
 * i mean i think i can use storybook with react and just do this react way but ill come back to that
 */
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