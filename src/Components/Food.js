import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';

const Food = () => {
  return (
    <>
    <Container className='mt-5'>
        <Row>
            <Col lg={6}>
                <h3>Famous & Local Food of Tamil Nadu</h3>
                <p style={{textIndent:'3rem', textAlign:'justify'}} className='mt-3'>
                The food of Tamil Nadu is rich in both vegetarian and non-vegetarian
food. The diet mainly consists of rice, lentils, legumes with spices such as curry
leaves, cinnamon, cloves, ginger, garlic etc. Coconut is widely used in various
forms. People of Tamil Nadu believe that serving food to another living being, be
it humans or animals, is a service to God himself, Therefore, they are incredibly
generous when it comes to food, whether it is in their homes or temples or even
restaurants, Traditionally, this south Indian cuisine is served on 2 banana leaf, and
people sit on the floor to eat. A typical meal consists of Rice, Sambhar(Curry), two
types of vegetables, curd and a pickle. Doszs, idlis, Upma, Parota, Sambhar, Rasam,
Pongal, are the dishes with which the cuisine of Tamil Nadu is identified. Payasam,
Kesari, Sweet Pongal are the sweet treasures of this cuisine. Filter coffee is a
speciality of the south-indian cuisine. The making of filter coffee is like a ritual
the coffee beans are first roasted and then powdered. They then use a filter set.
few scoops of powdered coffee and enough amount of bailing water is added to
prepare 2 very dark liquid called the decoction. A 3/4 mug of hot milk with sugar
2nd 2 small quantity of decoction is then served in Dabarah, a unique Coffee cup
                </p>
            </Col>
            <Col lg={6}>
                 <Row className='mt-5'>
                    
                        <img src={require('../Food/Food1.jpeg')} alt="Coffee" width={'100%'} height={'210rem'} className='col-lg-6'/>
                    
                    
                        <img src={require('../Food/Food3.jpeg')} alt="dosa" width={'100%'} height={'210rem'} className='col-lg-6'/>
                    
                </Row>
                <Row className='mt-3'>
                    <Col lg={6}>
                        <img src={require('../Food/Food2.jpg')} alt="Idli" width={'100%'} height={'210rem'}/>
                    </Col>
                    <Col lg={6}>
                        <img src={require('../Food/Food4.jpg')} alt="food" width={'100%'} height={'210rem'}/>
                    </Col>
                </Row> 
                
            </Col>
        </Row>

        <Row className='' style={{marginTop:'5rem'}}>
            <h4 className='text-center'>TAMILNADU <br /> FAMOUS AND LOCAL FOODS </h4>
        </Row>

        <Row className=' d-flex justify-content-between' style={{display:'flex', justifyContent:'space-between', marginTop:'7rem'}}>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }} className='text-center rounded-5'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Chennai</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
          
Chennai?s local cuisine consists of traditional South
Indian food such as sambar, dosas and idlis. Ranging from
street side stalls to upscale restaurants, you can enjoy a
complete gourmet experience in Chennai. Chennai like any
sparkling city that is constantly growing and expanding in all
its spheres, fosters a cuisine that provides countless options.
The city has a vibrant street food culture as well as well laid
out and flattering fine dining experiences. While you can try a
number of cuisines and foods here, one must not miss what
Chennai is known for- traditional and authentic South-Indian
cuisine. Hence do not miss the filter coffee as well as items
like Idli, Dosa, Appam. Vada, Upma, Sambhar, Parotha,
Chettinad Chicken, Pepper Chicken, Chicken Stew, Sweet

Pongal, Kesari, Payasam and much more.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black', height:'100%' }} className='rounded-5 ms-4'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Rameshwaram</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
        Rameswaram offers delicious and elaborate South-
Indian platters and Thalis which are mostly vegetarian. One
does, however find a number of non-vegetarian preparations
in the hotels here as well as a wide range of seafood prepared
by the people here. The other local favorites that one must try,
include Filter Coffee, Cuttle fish, Crab meat, Baby octopus,
Keema Vadas, Rasam, Sambhar, Idli, Vada, Dosa and more. You
also find North-Indian, Chinese and Continental cuisines in the
area. Rameshwaram is famous for its non-vegetarian cuisine.
Besides the regular biryani and parotta, plenty of soup stalls
offer a range of mutton and chicken dishes. From mutton thala
curry and goat leg soup to botti curry, these stalls are a non-
veg lover's delight.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
        </Row>

        <Row className='my-5'>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }} className='text-center rounded-5'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Kodaikanal</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
          
                Chocolates, Sandwiches, Brownies, cheeses and some
        hot ‘chai’ are the most sought after eateries of Kodaikanal.
        Other than these, there is a lot that stands out in this town
        such as locally produced organic foods, a rich and spicy dash

        of Punjabi cuisine, popular items of Tibetan cuisine, an
        absolutely lip-smacking variety of Biryanis, as well as an
        elaborate Gujarati platter. Find local and traditional platters
        here too, with essentials like Dosas, idilis, Upma, Parota,

        Sweet pongal and lots

        Sambhar, Rasam, Paysam. Kesal

        more.Kodaikanal offers exquisite Tamil cuisine which includes
        idlis and dosas. Besides that, the local's favourite Tibetan
        dishes like momos and noodle soup are a must-try.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black', height:'100%' }} className='rounded-5 ms-4'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Ooty</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
        Ooty can be your trip through dream-like indulges of
chocolate and all that's sweet. Lose yourself in the city's
bakeries which serve temptations like white chocolate,
strawberry chocolate, fudge, home made chocolates, buns and
cakes. Equally popular here, are the tea plantations and hence
a hot cup of local and exquisite varieties of tea. Another
beverage to try here is the wine from the local vineyards. Also
nes, as well as
sandwiches, pizzas and hot breads. one may also try the

relish North-Indian cuisines, Chinese cui

vegetarian South-Indian platter here with essentials like Idi,
Dosa, Chutney, Vada, Sambhar, Rasam, Upma, Sweet Pongal,
Payassam, Kesari.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
        </Row>

        <Row className='my-5'>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }} className='text-center rounded-5'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Kanyakumari</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
          

In Kanyakumari, much of what is prepared is done so
with a generous use of spices and an essential garnish of
coconut. Hence, one can sense these two flavours distinctly in
almost all the food here. Other than these, do enjoy de

acies

of freshly caught fishes, as well as typical South-Indian
platters in one of their most authentic and lip-smacking forms.
Typical South-Indian delicacies that one must try include Idi,
Dosa, Chutney. Vada, Sambhar, Rasam, Upma, Sweet Pongal,
Payassam. Kesari and more. One also finds North-Indian,
Gujarati, Chinese, Rajasthani cuisines here.

        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black', height:'100%' }} className='rounded-5 ms-4'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Kumbakonam</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
      
Vegetarian food rules the roost here with pre-
dominantly Tamil cuisines on offer. One can get authen
South Indian cuisines which

tickle your taste buds. Also

don't forget to have coffee Kumbakonam as it has one of the
best filter coffees in the world It is best known for its rich
collection of finest silk sarees which are handmade by the
locals. Other than this, Kumbakonam is the right place for the
metal sculptors and the idols of the famous Hindu god and
goddesses which are entirely crafted by the local artisans of
the time.

        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
        </Row>

        <Row className='my-5'>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }} className='text-center rounded-5'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Madurai</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
          

        Madurai is often referred to as the food capital of
Tamil Nadu, given the huge variety in styles, cuisines, genres
and sizes that it offers. In Madurai, you can taste the most
authentic of traditional delicacies as well as indulge in fast
food, Bengali, Italian, Chinese and North-Indian cuisines. Also,
the food is lip smacking all though its streets to the elaborate
restaurants. The local delicacies include Paruthi paal,
jigarthanda, panangkarkandu paal and chettinadu varieties like
appam, kuzhi paniyaram, etc. as well as beverages like Paruthi,
Jigarthanda as well as the popular Filter coffee . Other than
these, find local favorites from all over Bengal Fish curry,
Pizzas, Chaats, Fish and Chips, Gulab Jamuns, Samosas, Butter
Chicken, Tandoori Chicken and lots more.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black', height:'100%' }} className='rounded-5 ms-4'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Yercaud</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
     
Tamil Nadu people believe that serving food to another
living being be it humans or animals, is a service to god itself.
Therefore, they are generous when it comes to food, whether
itis in their home or temples or even restaurants. Traditionally,
this south Indian cuisine is served on a banana leaf and people
sit on the floor to eat. It is rich in both vegetarian and non-
vegetarian food. The food mainly consists of rice, lentils,
legumes with spices such as curry leaves, cinnamon, cloves,
ginger, garlic etc. Coconut in various forms in widely used. A
typical meal consists of Rice, Sambhar(Curry), two types of
[ETI curd and a pickle. Dosas, idilis, Upma, Parota,
Sambhar, Rasam, Pongal are the dishes with which the cuisine
of Tamil Nadu is identified.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
        </Row>

        <Row className='my-5'>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black', height:'100%' }} className='text-center rounded-5'>
      
      <Card.Body>
        <Card.Title className='text-center'>Food of Hogenakkal</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
          
        Being a small hill station, Hogenakkal isn't spoilt for
choices, when it comes to restaurants. However there are
delicacies of the mountains that you can enjoy here,
like ice creams and soups.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col lg={6}>
            <Card style={{ width: '32rem', boxShadow: ' 2px 2px 6px black', height:'100%' }} className='rounded-5 ms-4'>
      
      <Card.Body>
        <Card.Title className='text-center'>
Food of Theni</Card.Title>
        <Card.Text className='mt-4' style={{textIndent:'4rem',textAlign:'justify'}}>
        The hotel that is now famous for its non ~ vegetarian
dishes was started by Chinnaswamy and his wife Susheela, as a
quaint idli shop, around two and a half decades ago. Now, the
hotel has become a major landmark in Theni district.
Interestingly, the hotel is named after the couple's son,
Iyothis. The dishes are put together by 15 cooks, who are also
day at 4 in

the couple's close relatives. The cooks begin th
the morning. The breakfast menu consists of idli, dosa, porotta
and pongal. Around the breakfast time, they begin preparing
their iconic lunch dishes too. At least twenty curries are ready
by 10 am. Jyothis Hotel is another example of Tamil Nadu's

great culinary heritage that hasn't failed to impressed foodies
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Food