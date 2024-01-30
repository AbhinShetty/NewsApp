import React from 'react'

const NewsItem=(props)=>{

   let  {title, description, imageUrl, newsUrl, author, date, source } =props;
   
    return (
      <div>
        <div className="card">
          <div style={ {
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "80%", zIndex: "1" }}
            >
              {source}{" "}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://videohive.img.customer.envatousercontent.com/files/11691217/590x300.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=79bbf2c1cb5f5df8fd92aed9b6f822d4"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More....
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem