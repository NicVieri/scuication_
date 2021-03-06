import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;

    return (
      <section className="container" key={"category-${index1}"}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.itemId.map((item, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={"category-${index1}-item-${index2}"}
                  >
                    <Fade bottom>
                      <div className="card1">
                        <figure
                          className="img-wrapper"
                          style={{ height: 200, width: 250 }}
                        >
                          <img
                            src={
                              item.imageId[0]
                                ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                                : ""
                            }
                            alt={item.name}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="stretched-link d-block text-$black"
                          >
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
