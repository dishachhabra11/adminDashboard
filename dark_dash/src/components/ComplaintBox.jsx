import React from "react";

const ComplaintBox = () => {
  return (
    <div class="col-md-12">
      <div class="table-wrap">
        <table class="table myaccordion table-hover" id="accordion">
            
            <tbody>
						    <tr data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						      <th scope="row">1</th>
						      <td>Laptop Technology AS2020</td>
						      <td>$200.00</td>
						      <td>2</td>
						      <td>$400.00</td>
						      <td>
						      	<i class="fa" aria-hidden="true"></i>
				        	</td>
						    </tr>
						    <tr>
						    	<td colspan="6" id="collapseOne" class="collapse show acc" data-parent="#accordion">
						    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
						    	</td>
						    </tr>

            </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default ComplaintBox;
