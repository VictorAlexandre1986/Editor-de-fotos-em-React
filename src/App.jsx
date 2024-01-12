
import { useState } from 'react'
import Annoucement from './Annoucement'
import Navbar from './Navbar'

function App() {

  const [brightness, setBrightness] = useState({
    name:'Brightness',
    property:'brightness',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit: '%'
  })

  const [contrast, setContrast] = useState({
    name:'Contrast',
    property:'contrast',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit: '%'
  })

  const [saturation, setSaturation] = useState({
    name:'Saturate',
    property:'saturate',
    value:100,
    range:{
      min:0,
      max:200
      },
      unit:'%'
  })

const [grayscale, setGreyscale] = useState({
  name:"Grayscale",
  property:"grayscale",
  value:0,
  range:{
    min:0,
    max:100
  },
  unit: '%'
})

const [sepia,setSepia] = useState({
  name:'Sepia',
  property:'sepia',
  value:0,
  range:{
    min:0,
    max:100
  },
  unit:'%'
})

  const [hueRotate, setHueRotate] = useState({
    name:'Hue Rotate',
    property:'hue-rotate',
    value:0,
    range:{
      min:0,
      max:360
    },
    unit: 'deg'
  })
  const [blur, setBlur] = useState({
    name:'Blur',
    property:'blur',
    value:0,
    range:{
      min:0,
      max:20
    },
    unit: 'px'
  })

  const [background, setBackground] = useState('https://images.wallpaperscraft.com/image/single/forest_man_loneliness_116306_800x600.jpg')

  return (
    <>
    {/* <Annoucement/> */}
    <Navbar setBackground={setBackground}/>
    <div className="wrapper">
      <div className='image-wrapper'>
        <div className='image'>
          <img src={background} alt='estrada na floresta' style={{filter: `${brightness.property}(${brightness.value}${brightness.unit}) ${blur.property}(${blur.value}${blur.unit}) ${contrast.property}(${contrast.value}${contrast.unit}) ${grayscale.property}(${grayscale.value}${grayscale.unit}) ${sepia.property}(${sepia.value}${sepia.unit}) ${saturation.property}(${saturation.value}${saturation.unit}) ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})`}}/>
          </div>
        </div>
      <div className='options'>
        <div className='mode'>
            <span>Brightness</span>     
            <input type='range' max={brightness.range.max} min={brightness.range.min}  value={brightness.value} onChange={(e) => { setBrightness({...brightness, value: `${e.target.value}` }) }}/>
            <span>Blur</span>
            <input type='range' max={blur.range.max} min={blur.range.min}  value={blur.value} onChange={(e) => { setBlur({...blur, value: `${e.target.value}` }) }}/>
        </div>
        <div className='mode'>
            <span>Contrast</span>
            <input type='range' max={contrast.range.max} min={contrast.range.min} value={contrast.value} onChange={(e) => { setContrast({...contrast, value: `${e.target.value}` }) }}/>
            <span>Saturation</span>
            <input type='range' max={saturation.range.max} min={saturation.range.min}  value={saturation.value} onChange={(e) => { setSaturation({...saturation, value: `${e.target.value}` }) }}/>
          </div>
          <div className='mode'>
            <span>Grayscale</span>
            <input type='range' max={grayscale.range.max} min={grayscale.range.min}  value={grayscale.value} onChange={(e) => { setGreyscale({...grayscale, value: `${e.target.value}` }) }}/>
            <span>Sepia</span>
            <input type='range' max={sepia.range.max} min={sepia.range.min} value={sepia.value} onChange={(e) => { setSepia({...sepia, value: `${e.target.value}` }) }}/>
          </div>
          <div className='mode hueRotate'>
            <span>hueRotate</span>
            <input type='range' max={hueRotate.range.max} min={hueRotate.range.min} value={hueRotate.value} onChange={(e) => { setHueRotate({...hueRotate, value: `${e.target.value}` }) }}/>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
