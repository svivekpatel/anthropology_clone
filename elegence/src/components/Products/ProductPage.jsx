import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard'
import ProductList from './ProductList'
import "./productpage.css"
export default function ProductPage() {
  let DressesData1 = [
    {
        id:411,
        name:"By Anthropologie Strapless Mini Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        price:170.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        category:'Dresses'

    },
    {
        id:412,
    name:"By Anthropologie Square-Neck Tiered Dress",
    image:["https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
    price:170.00,
    category:"Dresses",
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130348690217_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
},
{
    id:413,
    name:"Endless Rose Mock-Neck Sleeveless Mini Dress",
    image:["https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
    price:148.00,
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130634430017_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
    category:"Dresses"
},

{
    id:414,
    name:"Maeve Sleeveless Flounce Dress",
    image:["https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_c?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],      
    price:148.00,
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
    category:"Dresses"
},
{
    id:415,
    name:"English Factory Layered Sweater Dress",
    image:["https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
    price:120.00,
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
    category:"Dresses"
},
{
    id:416,
    name:"The Somerset Eyelet Mini Dress",
    image:["https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
    price:130.00,
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
    category:"Dresses"
},

]

let DressesData2 = [
  {
    id:417,
    name:"The Somerset Mini Dress",
    image:[
        "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"
    ],
    price:140.00,
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130646420031_033_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_104_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"], 
    category:"Dresses"
},
{
    id:418,
    name:"The Somerset Maxi Dress",
    image:[
        "https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"
    ],
    price:180.00,
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130646420009_085_c?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_008_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_079_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
    category:"Dresses"

},
{
id:419,
name:"Devotion Twins Embroidered Ella Tunic Dress",
image:["https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
price:297.00 ,
category:"Dresses",
color_image:["https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
},

    {
        id:420,
        name:"By Anthropologie Tiered Tunic Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130370060127_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130370060127_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130370060127_001_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130370060127_001_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        price:138.00,
        category:"Dresses",
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130370060127_062_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130370060127_035_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349","https://images.urbndata.com/is/image/Anthropologie/4130370060127_035_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130370060127_046_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
    },

    {
        id:424,
        name:"By Anthropologie Eyelet Shirt Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],    
        price:230.00,
        category:"Dresses",
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
    },
    {
        id:425,
        name:"The Maya Ruched Cowl-Neck Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b5?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        price:160.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130607630013_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630013_030_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
    },
    {
      id:421,
      name:"Devotion Twins Embroidered Ella Tunic Dress",
      image:["https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b5?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
      price:297.00,
      category:"Dresses",
      color_image:["https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_045_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_091_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_042_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130728470001_034_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
  },
  {
      id:422,
      name:"Devotion Twins Opalios Blouse",
      image:["https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
      price:280.00,
      category:"Dresses",
      color_image:["https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470009_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
  },
  {
      id:423,
      name:"The Somerset Eyelet Mini Dress",
      image:["https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
      price:290.00,
      category:"Dresses",
      color_image:["https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130647160167_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
  },

    
]
let addElem =  {
  id:999,
  name:"Devotion Twins Opalios Blouse",
  image:["https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
  price:280.00,
  category:"Dresses",
  color_image:["https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470009_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
}
  return (
    <div>
        <div className='productpage'>
            <Box>
           <h1>Sidebar</h1>
            </Box>
            <Box>
                <ProductList data={DressesData1} />
                <Flex  justifyContent={"center"} className='Add'  gridTemplateColumns={"70% 20%"} mt={"3rem"}>
             
            <Image className='Addimg' h={{base:"100%",sm:"100%",lg:"86%"}} ml={"1rem"}  w={{base:"100%",sm:"100%",lg:"64.5%"}} src='https://images.ctfassets.net/5de70he6op10/6QOf9TDaIjOyrwNScJNEZv/6b6801edc04c30b0f6c1df088e48a06d/11_Vacation_Dresses_2x.jpg?w=1440&q=80&fm=webp' alt='prof-pis'/>   
            <ProductCard {...addElem} />
            
                </Flex>
                <br/>
                <Box className='produc'>
                <ProductList data={DressesData2}/>
                </Box>
            </Box>
        </div>
    </div>
  )
}
