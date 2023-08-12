import React, { useState } from 'react';

const Task3Main = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({ header: '', details: '' });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const addSection = (e) => {
    e.preventDefault();
    setSections(prevSections => [...prevSections, { header: newSection.header, details: newSection.details }]);
    setNewSection({ header: '', details: '' });
  };

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="row m-4">
      <div className="col-12 col-md-4">
        <div className=' border p-4 border-primary'>
          <h1>Add Section</h1>
          <form onSubmit={addSection}>
            <div className="section-header">
              <label htmlFor="header">Section Header</label>
              <input id="header" name="header" className="form-control" value={newSection.header} onChange={e => setNewSection({ ...newSection, header: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="sectionDetails">Section Details</label>
              <textarea id="sectionDetails" name="details" className="form-control" cols="10" value={newSection.details} onChange={e => setNewSection({ ...newSection, details: e.target.value })}></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary col-sm-12">Add</button>
            </div>
          </form>
        </div>
        </div>
      <div className="col-12  col-md-7 mt-4 mt-md-0">
        <div>
          {sections.map((item, i) => (
            <div key={i} >
              <div className="accordion" id={`accordionExample${i}`}>
                <div className="card">
                  <div className="card-header" id={`heading${i}`}>
                    <h2 className="mb-0">
                      <button
                        className={`btn btn-link btn-block text-left ${expandedIndex === i ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(i)}
                        aria-expanded={expandedIndex === i}
                        aria-controls={`collapse${i}`}
                      >
                        {item.header}
                      </button>
                    </h2>
                  </div>
                  <div
                    id={`collapse${i}`}
                    className={`collapse ${expandedIndex === i ? 'show' : ''}`}
                    aria-labelledby={`heading${i}`}
                    data-parent={`#accordionExample${i}`}
                  >
                    <div className="card-body">
                      {item.details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task3Main;
