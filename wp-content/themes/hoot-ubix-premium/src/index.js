const { render, useState } = wp.element;
import Builder from './ProductBuilder/Builder';
import "./style.scss";
const Votes = () => {
  const [votes, setVotes] = useState(0);
  const addVote = () => {
    // setVotes(votes + 1);
    // console.log(jQuery('#section-woocommerce'));
    let formData = {
      action: 'ajaxHandleForTestHook',
      item_id: 1,
      values: 10
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: 'http://localhost/garage/wp-admin/admin-ajax.php',
      data: formData,
      success: function(msg){
          console.log(msg);
      }
    });
  };
  return (
    <Builder />
    // <div>
    //   <p>
    //     <button onClick={addVote}>Call the Hooks</button>
    //   </p>
    // </div>
  );
};
render(<Votes />, document.getElementById('single-product-builder'));