const PropertyItem = ({property})=> {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{property.propertytypeid?.title}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {property.bedrooms}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {property.bathrooms}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{property.sizeprefix}: {property.areasize}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
