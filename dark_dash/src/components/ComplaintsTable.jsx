import React from 'react'
import ComplaintBox from './ComplaintBox';

const ComplaintsTable = () => {
  return (
    <div>
      <section class="ftco-section" style={{width:"100%",minWidth:"100vw"}}>
		<div class="container" style={{marginTop:"10vh",padding:"30px", minWidth:"100vw"}}>
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-4">
					
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
				
					<div class="">
						<table class="table myaccordion table-hover" id="accordion">
						  <thead>
						    <tr>
						      <th>sc.no</th>
						      <th>Name</th>
						      <th>PID</th>
						      
						      <th>Title</th>
						      {/* <th>&nbsp;</th> */}
						    </tr>
						  </thead>
						  <tbody>
						    {/* <tr data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
						    </tr> */}
							<ComplaintBox/>

						    <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="collapsed">
						      <th scope="row">2</th>
						      <td>Laptop Technology AS2020</td>
						      <td>$200.00</td>
						      <td>2</td>
						      <td>$400.00</td>
						      <td>
						      	<i class="fa" aria-hidden="false"></i>
				        	</td>
						    </tr>
								<tr>
						    	<td colspan="6" id="collapseTwo" class="collapse acc" data-parent="#accordion">
						    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
						    	</td>
						    </tr>

						    <tr data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="collapsed">
						      <th scope="row">3</th>
						      <td>Laptop Technology AS2020</td>
						      <td>$200.00</td>
						      <td>2</td>
						      <td>$400.00</td>
						      <td>
						      	<i class="fa" aria-hidden="false"></i>
				        	</td>
						    </tr>
								<tr>
						    	<td colspan="6" id="collapseThree" class="collapse acc" data-parent="#accordion">
						    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
						    	</td>
						    </tr>

						    <tr data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" class="collapsed">
						      <th scope="row">4</th>
						      <td>Laptop Technology AS2020</td>
						      <td>$200.00</td>
						      <td>2</td>
						      <td>$400.00</td>
						      <td>
						      	<i class="fa" aria-hidden="false"></i>
				        	</td>
						    </tr>
								<tr>
						    	<td colspan="6" id="collapseFour" class="collapse acc" data-parent="#accordion">
						    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
						    	</td>
						    </tr>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default ComplaintsTable;