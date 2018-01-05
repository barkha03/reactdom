import React from 'react'

class UpdatePage extends React.Component{
    constructor(){
        super();
        this.state={
            updateData:[{
                "Sr":1,
                "desc":"Barkha",
                "date":"03-01-18",
                "remark":"200"
             },
             {
                "Sr":2,
                "desc":"Second",
                "date":"11-02-18",
                "remark":"300"
             },
             {
                "Sr":3,
                "desc":"Third",
                "date":"13-02-18",
                "remark":"400"
             },
             {
                "Sr":4,
                "desc":"Fourth",
                "date":"15-03-18",
                "remark":"500"
             }
            ]
        }

        }
render(){
    var ob={"background-color":"grey",
             "height":"30px"};
    
    return(/*<div>
        <div className="container">
    <h2>Basic Table</h2>
    <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
    <table className="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>*/
        <div>
            <div class="container">
            <h2>Basic Table</h2>
                        
            <table class="table">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Remark</th>
                </tr>
              </thead>
             
               <tbody>
                  {this.state.updateData.map((person, i) => <TableRow key = {i} 
                     updateData = {person} />)}
               </tbody>
            </table>
            <div class="row">
                <div class="col-md-12" style={ob}>
                    <p>OlderPost</p>
                    </div>
                    </div>
            </div>

           
</div>
    );
}

}  

class TableRow extends React.Component{
    render(){
        return(
            
              
                <tr>
                <td>{this.props.updateData.Sr}</td>
                <td>{this.props.updateData.desc}</td>
                <td>{this.props.updateData.date}</td>
                <td>{this.props.updateData.remark}</td>
                </tr>
               
              
        );
    }
}

export default UpdatePage;
