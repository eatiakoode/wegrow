const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "javascript:void(0)", icon: "fa-facebook" },
    { id: 2, liveLink: "javascript:void(0)", icon: "fa-twitter" },
    { id: 3, liveLink: "javascript:void(0)", icon: "fa-instagram" },
    { id: 4, liveLink: "javascript:void(0)", icon: "fa-pinterest" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
