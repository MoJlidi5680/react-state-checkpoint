import logo from './logo.svg';
import './App.css';
import Persons_cards from './Persons_cards';
import Model from './Model';

function App() {

  const persons=[

    {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg',
      profession: 'Software Engineer',
    },
    {
      fullName: 'Adele Laurie Blue Adkins',
      bio: 'Adele Laurie Blue Adkins MBE is an English singer-songwriter. She is known for her powerful mezzo-soprano vocals and songwriting.',
      imgSrc: 'https://th.bing.com/th/id/OIP.qNsCToYsk21N0GotPP2NywHaFV?w=255&h=184&c=7&r=0&o=5&pid=1.7',
      profession: 'English singer-songwriter',
    },
    {
      fullName: 'Michael Joseph Jackson',
      bio: 'Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist.',
      imgSrc: 'https://th.bing.com/th?id=ATPOL3A08C2BAED56616C5F36368CE0960A100E715883A18D910E67604275095FD65D&w=300&h=207&rs=1&o=6&oif=webp&pid=SANGAM',
      profession: 'an American singer, songwriter, dancer, and philanthropist',
    },

    {
      fullName:'Nouhad Wadie Haddad',
      bio:'Nouhad Wadie Haddad, known as Fairuz, is a Lebanese singer. She is considered by many as one of the leading vocalists and most famous singers in the history of the Arab world',
      imgSrc:'https://th.bing.com/th?id=OSK.HEROk66vpCEx4PADi9kjz_8_z3OOtwF24XNHvhHrQ-KYWTo&w=472&h=280&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      profession: ' Lebanese singer',
    },
    {
      fullName: 'Alice Johnson',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://www.usatoday.com/gcdn/presto/2020/08/28/USAT/04e68ffb-f164-4243-b403-753aec9d7f00-XXX_sd_News__Republican_National_Convention__26738_.jpg',
      profession: 'Data Scientist',
    },
    
  ]
  return (
    <div className="App">
     
      <Persons_cards  persons={persons}/>

    </div>
  );
}

export default App;

