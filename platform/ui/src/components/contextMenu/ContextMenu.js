import PropTypes from 'prop-types';
import React from 'react';
import './ContextMenu.css';
import { useTranslation } from 'react-i18next';

const ContextMenu = ({ items, onClick }) => {
  const [t] = useTranslation('Common');

  return (
    <div className="ContextMenu" onContextMenu={e => e.preventDefault()}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button className="form-action" onClick={() => onClick(item)}>
              <span key={index}>{t(item.label)}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContextMenu.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContextMenu;
