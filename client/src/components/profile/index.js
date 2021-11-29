import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { QUERY_SINGLE_USER, QUERY_PRODUCTS } from "../../utils/queries";

function Profile() {
  const { loading, data } = useQuery(QUERY_SINGLE_USER);
  const user = data?.user || [];

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);

  return (
    <div>
      <section>
        <div>
          <div>
            {user.firstName} {user.lastName}
          </div>
          {user.userName}
        </div>
        <button type="submit" onClick={handleUpdate}>
          Edit Profile
        </button>
        <div>
          <h5>Your Seller Rating</h5>
          <div>
            <i class="material-icons">star_border</i>
            <i class="material-icons">star_border</i>
            <i class="material-icons">star_border</i>
            <i class="material-icons">star_border</i>
            <i class="material-icons">star_border</i>
          </div>
        </div>
      </section>
      <div>
        {/* map products belong to this user and list them */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <div key={product._id} className="card">
              <div className="card-image">
                <img src={product.image} alt="product" />
              </div>
              <div className="card-content">
                <h5>
                  {user.userName} is selling {product.name}
                </h5>
                <p>{product.description}</p>
                <p>Condition: {product.condition}</p>
                <p>Asking Price: {product.price}</p>
              </div>
            </div>
          ))
        )}
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
