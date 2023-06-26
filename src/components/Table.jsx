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
                      <div>
                        <input
                              type="checkbox"
                              name="info"
                              value="Heading section"
                              onChange={handleChange}
                        />
                      </div>
                    </th>

                    <th> 
                        <div>
                       
                            File Name
                           
                            <button
                                type="button"
                                onClick={() => requestSort('file_name') }
                                className={getClassNamesFor('file_name')}
                            >
                            <i  class="fa">&#xf0dc;</i>
                            </button>
                        </div>
                        
                    </th>
                    
                    <th>
                      <div>
                        Counterparty Name 
                        <button
                          type="button"
                          onClick={() => requestSort('counterparty_name') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Document Name 
                        <button
                          type="button"
                          onClick={() => requestSort('document_name') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Status 
                        <button
                          type="button"
                          onClick={() => requestSort('status') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>
                      
                    </th>
                    <th>
                      <div>
                        Effective Date
                        <button
                          type="button"
                          onClick={() => requestSort('effective_date') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>

                    </th>
                    <th>
                      <div>
                        Agreement Date
                        <button
                          type="button"
                          onClick={() => requestSort('agreement_date') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Expiration Date
                        <button
                          type="button"
                          onClick={() => requestSort('expiration_date') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Termination
                        <button
                          type="button"
                          onClick={() => requestSort('termination') }
                          className={getClassNamesFor('counterparty_name')}
                          >
                          <i  class="fa">&#xf0dc;</i>
                        </button>
                      </div>
                    </th>
                    
                </tr>
               

                </thead>

                <tbody>
                    {items.map((val , index)=>{
                        return(
                            <tr>
                                <td> 
                                  <div>
                                    <input
                                              
                                        type="checkbox"
                                        name="info"
                                        value={[val.file_name , val.counterparty_name,val.document_name,val.status, val.effective_date, val.agreement_date,val.expiration_date, val.termination]}
                                        onChange={handleChange}
                                    />
                                  </div>
                                </td>
                                <td >
                                  <div>
                                    {val.file_name}
                                  </div>
                                </td>
                                <td><div>{val.counterparty_name}</div></td>
                                <td><div>{val.document_name}</div></td>
                                <td><div>{val.status}</div></td>
                                <td><div>{val.effective_date}</div></td>
                                <td><div>{val.agreement_date} </div></td>
                                <td><div>{val.expiration_date}</div></td>
                                <td><div>{val.termination}</div></td>
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