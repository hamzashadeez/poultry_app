import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import {ads} from './AdsData';

const Ad = ({url}) => {
  return (
    <View style={{position: 'relative', height: 120}}>
      <AdImage resizeMode="cover" source={url} />
      <View
        style={{
          padding: 3,
          backgroundColor: '#ddd',
          width: 30,
          height: 17,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 1,
          right: 5,
          borderRadius: 3
        }}>
        <Text style={{color: '#666', fontSize: 10, fontFamily: 'Roboto-Bold'}}>
          Ads
        </Text>
      </View>
    </View>
  );
};

const AdBanner = () => {
  return (
    <Banner horizontal showsHorizontalScrollIndicator={false}>
      {ads.map(ad => (
        <Ad key={ad} url={ad} />
      ))}
    </Banner>
  );
};

export default AdBanner;

const Banner = styled.ScrollView`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  max-height: 140px;
`;

const AdImage = styled.Image`
  width: 160px;
  height: 120px;
  border-radius: 8px;
  margin-left: 6px;
`;
