import React, { useState } from "react";
import './table.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
        
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };


const Table = (props) =>{
    // useEffect(() => {
    //     axios({
    //       url: `URL`,
    //     }).then((res) => {
    //       setTeam(res.data);
    //     });
    //   }, []);
    
    // sorting
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    
     
    //selecting data information.

    const [userinfo, setUserInfo] = useState({
        info: [],
        response: [],
      });
    const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { info } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        info: [...info, value],
        response: [...info, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        info: info.filter((e) => e !== value),
        response: info.filter((e) => e !== value),
      });
    }
  };
  
    
    return(
        <>
        
            <table className="scroll-touch" >
                <thead>
                <tr >
                    <th>
                      <input
                            type="checkbox"
                            name="info"
                            value="Heading section"
                            onChange={handleChange}
                      />
                    </th>

                    <th> 
                        
                       
                            File Name
                           
                            <button
                                type="button"
                                onClick={() => requestSort('file_name') }
                                className={getClassNamesFor('file_name')}
                            >
                            <i  class="fa">&#xf0dc;</i>
                            </button>

                        
                    </th>
                    
                    <th>
                      Counterparty Name 
                      <button
                        type="button"
                        onClick={() => requestSort('counterparty_name') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>
                    </th>
                    <th>
                      Document Name 
                      <button
                        type="button"
                        onClick={() => requestSort('document_name') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>
                    </th>
                    <th>
                      Status 
                      <button
                        type="button"
                        onClick={() => requestSort('status') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>
                      
                    </th>
                    <th>
                      Effective Date
                      <button
                        type="button"
                        onClick={() => requestSort('effective_date') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>

                    </th>
                    <th>
                      Agreement Date
                      <button
                        type="button"
                        onClick={() => requestSort('agreement_date') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>
                    </th>
                    <th>
                      Expiration Date
                      <button
                        type="button"
                        onClick={() => requestSort('expiration_date') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>
                    </th>
                    <th>
                      Termination
                      <button
                        type="button"
                        onClick={() => requestSort('termination') }
                        className={getClassNamesFor('counterparty_name')}
                        >
                        <i  class="fa">&#xf0dc;</i>
                      </button>
                    </th>
                    
                </tr>
               

                </thead>

                <tbody>
                    {items.map((val , index)=>{
                        return(
                            <tr>
                                <td> 
                                  <input
                                            
                                      type="checkbox"
                                      name="info"
                                      value={[val.file_name , val.counterparty_name,val.document_name,val.status, val.effective_date, val.agreement_date,val.expiration_date, val.termination]}
                                      onChange={handleChange}
                                  />
                                </td>
                                <td >{val.file_name}</td>
                                <td>{val.counterparty_name}</td>
                                <td>{val.document_name}</td>
                                <td>{val.status}</td>
                                <td>{val.effective_date}</td>
                                <td>{val.agreement_date}</td>
                                <td>{val.expiration_date}</td>
                                <td>{val.termination}</td>
                            </tr>
                        )
                    })}    
                                
                        

                </tbody>
            </table>
            {console.log(userinfo.response)}
            
            {/* <div >
          
              <textarea
                name="response"
                value={userinfo.response}
                placeholder="data"
                style={{ height: "50px" , width:"30%" }}
                onChange={handleChange}
              ></textarea>
            </div> */}
        </>
    )
}
export default Table;