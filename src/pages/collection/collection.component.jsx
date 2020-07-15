import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { collectionSelector } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection, collectionId }) => {
  if (!collection) {
    const passedParam = collectionId ? collectionId : '';
    return <Redirect to={`/${passedParam}`} />;
  }

  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
  collectionId: ownProps.match.params.collectionId
});

export default connect(mapStateToProps)(CollectionPage);
