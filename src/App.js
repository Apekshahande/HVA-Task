


import Table from './components/Table';

function App() {
  return (
    <div >
      
      <Table 
          products={[
            {
              id: 1,
              file_name: "A",
              counterparty_name: "xyz",
              document_name:"name",
              status:"Active",
              effective_date: "13 sep 2019",
              agreement_date:"13 sep 2020",
              expiration_date:"13 sep 2023",
              termination:"yes"
          
              },
              {
              id: 2,
              file_name: "B",
              counterparty_name: "💯2",
              document_name:"home",
              status:"UnActive",
              effective_date: "13 apr 2010",
              agreement_date:"13 spr 2015",
              expiration_date:"13 sep 2023",
              termination:"No"
          
              },
              {
              id: 3,
              file_name: "C",
              counterparty_name: "3",
              document_name:"in win perfect perfect parties parties",
              status:"un",
              effective_date: "13 sp 2019",
              agreement_date:"13 sep 2019",
              expiration_date:"13 sep 2023",
              termination:"No"
          
              },
              {
              id: 4,
              file_name: "D",
              counterparty_name: "y",
              document_name:"win win perfect perfect parties parties",
              status:"un",
              effective_date: "13 sp 2019",
              agreement_date:"13 sep 2019",
              expiration_date:"13 sep 2023",
              termination:"No"
          
              },

         
         ]}/>
     
    </div>
  );
}

export default App;
