import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import SelectDropdown from 'react-native-select-dropdown';

function VitalsCard({title, value, svg, color}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#2E4B53',
        width: '48%',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {svg}
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: color,
            marginLeft: svg ? 15 : null,
          }}>
          {value}
        </Text>
      </View>
      <Text
        style={{fontSize: 18, fontWeight: 'bold', color: color, marginTop: 10}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
function MedicationCard({data}) {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 16, color: '#1B3860'}}>{data.name}</Text>
      <Text style={{fontSize: 16, color: '#1B3860'}}>{data.time}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const medicationData = [
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
    {
      name: 'Medicine Name(5mg)',
      time: '11:00 pm',
    },
  ];

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18.342}
            height={15.285}>
            <Path
              data-name={2223615}
              d="M17.578 6.878H2.331l5.838-5.561A.764.764 0 107.115.21L.448 6.561a1.528 1.528 0 00.013 2.175l6.654 6.338a.764.764 0 101.054-1.107L2.307 8.406h15.27a.764.764 0 100-1.528z"
              fill="#fbfbfb"
            />
          </Svg>
        </TouchableOpacity>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ffffff'}}>
            Bed No. 43
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
            F/O Bilal Arif
          </Text>
        </View>
      </View>
    );
  }

  function renderSuggestionButton() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 'auto',
          backgroundColor: '#2EC5B6',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: '#ffffff', fontSize: 16}}>
          View Previous Suggestions
        </Text>
      </TouchableOpacity>
    );
  }

  function renderSelection() {
    const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
    return (
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        renderDropdownIcon={() => {
          return (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={11.74}
              height={6.897}>
              <G data-name={271228}>
                <G data-name="Group 495">
                  <Path
                    data-name="Path 2520"
                    d="M6.328 6.71l5.224-5.225a.644.644 0 000-.908l-.384-.385a.643.643 0 00-.908 0L5.872 4.58 1.48.188a.644.644 0 00-.908 0L.187.573a.644.644 0 000 .908l5.23 5.229a.648.648 0 00.911 0z"
                    fill="#1b3860"
                  />
                </G>
              </G>
            </Svg>
          );
        }}
        buttonStyle={{
          width: '100%',
          height: 45,
          backgroundColor: '#ffffff',
          borderRadius: 5,
          marginVertical: 10,
        }}
        buttonTextStyle={{
          fontSize: 14,
          color: '#242424',
          textAlign: 'left',
          maxWidth: 120,
        }}
        dropdownStyle={{backgroundColor: '#ffffff', borderRadius: 5}}
        rowStyle={{
          width: '100%',
          height: 45,
          backgroundColor: '#ffffff',
          borderRadius: 5,
          marginBottom: 1,
          borderColor: '#ffffff',
          shadowColor: '#ffffff',
        }}
        rowTextStyle={{
          fontSize: 14,
          color: '#242424',
        }}
      />
    );
  }
  function renderVitals() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <VitalsCard
          title="BPM"
          value={65}
          color="#ffffff"
          svg={
            <Svg xmlns="http://www.w3.org/2000/svg" width={46} height={30.766}>
              <G data-name={31704}>
                <Path
                  data-name="Path 2576"
                  d="M32.562 17.179a1.026 1.026 0 01-1.025 1.026h-6.282a1.016 1.016 0 01-1.011-.886l-1.11-7.969-2.242 20.505a1.022 1.022 0 01-.938.906h-.084a1.014 1.014 0 01-.983-.748l-3.34-11.878-3.29 6.252a1.008 1.008 0 01-1.03.541 1.028 1.028 0 01-.874-.769l-1.6-6.4H1.026a1.026 1.026 0 110-2.051H9.55a1.026 1.026 0 011 .777l1.144 4.571 3.237-6.146a1 1 0 011.012-.545 1.038 1.038 0 01.883.741l2.605 9.269L22 .91A1.02 1.02 0 0123 0a1.032 1.032 0 011.03.888l2.12 15.265h5.388a1.026 1.026 0 011.024 1.026zm5.427-1.025h-3.245a1.026 1.026 0 100 2.052h3.244a1.026 1.026 0 100-2.052zm6.986 0h-3.453a1.026 1.026 0 100 2.052h3.452a1.026 1.026 0 100-2.052z"
                  fill="#dfffef"
                />
              </G>
            </Svg>
          }
        />
        <VitalsCard
          title="BPM"
          value={65}
          color="#77D01E"
          svg={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={34.709}
              height={33.952}>
              <Path
                d="M33.692 16.945h-3.01l2.26-3a8.707 8.707 0 00.878-9.076c-3.338-6.89-13.036-6.208-16.466.426A9.8 9.8 0 008.437.002a8.7 8.7 0 00-6.67 13.944l2.26 3h-3.01a1.017 1.017 0 100 2.034H5.56l10.982 14.567a1.017 1.017 0 001.624 0l10.983-14.569h4.543a1.017 1.017 0 100-2.034zm-16.338 14.3L8.107 18.978h1.765a1.017 1.017 0 001-.814l1.211-5.938L16.4 24.235a1.017 1.017 0 001.894.05l3.376-8.026 1.406 2.243a1.017 1.017 0 00.861.477H26.6zm10.78-14.3H24.5l-2.147-3.424a1.018 1.018 0 00-1.8.146l-3.124 7.425-4.663-12.968a1.018 1.018 0 00-1.953.141l-1.771 8.68H6.574l-3.183-4.223a6.656 6.656 0 015.27-10.688 7.753 7.753 0 017.684 6.769 1.017 1.017 0 002.018 0C19.252 1.726 28.9-.625 31.99 5.757a6.6 6.6 0 01-.672 6.965z"
                fill="#77d01e"
              />
            </Svg>
          }
        />
        <VitalsCard
          title="BPM"
          value={65}
          color="#F0AB36"
          svg={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={33.48}
              height={41.891}>
              <Path
                data-name="Path 2583"
                d="M6.284 25.134a2.1 2.1 0 00-2.095 2.095v1.4a2.095 2.095 0 104.189 0v-1.4a2.1 2.1 0 00-2.094-2.095zm.7 3.491a.7.7 0 11-1.4 0v-1.4a.7.7 0 011.4 0z"
                fill="#f0ab36"
              />
              <Path
                data-name="Path 2584"
                d="M13.963 29.323h-2.327l2.048-1.536a.7.7 0 00.279-.559v-1.394a.7.7 0 00-.7-.7h-2.789a.7.7 0 00-.7.7v1.4h1.4v-.7h1.4v.349l-2.513 1.885a.7.7 0 00-.279.559v.7a.7.7 0 00.7.7h3.491z"
                fill="#f0ab36"
              />
              <Path
                data-name="Path 2585"
                d="M13.964 37.702h-2.095v1.4h2.793a.7.7 0 00.7-.7v-4.191h-1.4z"
                fill="#f0ab36"
              />
              <Path
                data-name="Rectangle 392"
                fill="#f0ab36"
                d="M9.429 37.717h1.886v1.886H9.429z"
              />
              <Path
                data-name="Path 2586"
                d="M27.927 16.058a5.585 5.585 0 00-.7 11.123v2.841a.7.7 0 01-.7.7h-4.884a.7.7 0 01-.7-.7V6.284a2.1 2.1 0 00-2.095-2.095h-4.884v-.7a.7.7 0 00-.7-.7h-2.093V.7a.7.7 0 00-.7-.7H7.68a.7.7 0 00-.7.7v2.093h-1.4v-.7a.7.7 0 00-.7-.7H2.095a.7.7 0 00-.7.7V7.68a.7.7 0 00.7.7h2.793a.7.7 0 00.7-.7v-.7h1.4v2.83A7.687 7.687 0 000 17.454V38.4a3.5 3.5 0 003.491 3.491h11.171a3.5 3.5 0 003.491-3.491V17.454a7.687 7.687 0 00-6.982-7.644V6.982h2.095a.7.7 0 00.7-.7v-.7h4.887a.7.7 0 01.7.7v23.74a2.1 2.1 0 002.095 2.095h4.887a2.1 2.1 0 002.095-2.095v-2.841a5.585 5.585 0 00-.7-11.123zM8.378 1.4h1.4v1.4h-1.4zM4.189 6.982h-1.4V2.793h1.4zm12.567 12.567v2.793H1.4v-2.793zm-2.094 20.945H3.491A2.1 2.1 0 011.4 38.4V23.738h15.36V38.4a2.1 2.1 0 01-2.098 2.094zm2.095-23.04v.7h-1.4v-.7a4.893 4.893 0 00-4.887-4.887h-.7v1.4h.7a3.5 3.5 0 013.491 3.491v.7H1.4v-.7a6.291 6.291 0 016.284-6.284h2.793a6.291 6.291 0 016.279 6.28zm-6.982-7.68h-1.4V6.982h1.4zm2.793-4.189H5.585v-1.4h6.982zm15.36 20.247a4.189 4.189 0 114.189-4.189 4.189 4.189 0 01-4.189 4.189z"
                fill="#f0ab36"
              />
              <Path
                data-name="Path 2587"
                d="M27.927 19.549a2.06 2.06 0 00-.9.209l-.7-.7-.987.987.7.7a2.06 2.06 0 00-.209.9 2.095 2.095 0 102.095-2.095zm0 2.793a.7.7 0 11.7-.7.7.7 0 01-.7.7z"
                fill="#f0ab36"
              />
            </Svg>
          }
        />
        <VitalsCard
          title="BPM"
          value={65}
          color="#63A7F6"
          svg={
            <Svg
              data-name={3915238}
              xmlns="http://www.w3.org/2000/svg"
              width={40.005}
              height={40.015}>
              <Path
                data-name="Path 2580"
                d="M30.941 10.944A9.064 9.064 0 0029.769 29v1.371a7.303 7.303 0 11-14.607 0v-10.61h.318a3.521 3.521 0 003.517-3.517V3.517A3.521 3.521 0 0015.48 0H3.517A3.521 3.521 0 000 3.517v12.727a3.521 3.521 0 003.517 3.517h.361v3.451h-.01a1.172 1.172 0 100 2.345h.01v2.672a4.961 4.961 0 00-3.78 4.811v2.021a4.953 4.953 0 109.906 0v-2.02a4.961 4.961 0 00-3.781-4.812v-2.673h.013a1.172 1.172 0 100-2.345h-.01v-3.45h6.594v10.606a9.65 9.65 0 1019.3 0V29a9.064 9.064 0 00-1.172-18.052zM7.659 33.041v2.021a2.609 2.609 0 01-5.217 0v-2.021a2.609 2.609 0 015.217 0zM3.517 17.416a1.174 1.174 0 01-1.172-1.172V3.517a1.174 1.174 0 011.172-1.172H15.48a1.174 1.174 0 011.172 1.172v12.727a1.174 1.174 0 01-1.172 1.172zm27.424 9.311a6.719 6.719 0 116.719-6.719 6.727 6.727 0 01-6.719 6.719z"
                fill="#63a7f6"
              />
              <Path
                data-name="Path 2581"
                d="M30.941 15.797a1.172 1.172 0 00-1.172 1.172v3.038a1.172 1.172 0 102.345 0v-3.035a1.172 1.172 0 00-1.173-1.175z"
                fill="#63a7f6"
              />
              <Path
                data-name="Path 2582"
                d="M12.7 6.982a1.173 1.173 0 00-2.027.256 1477.4 1477.4 0 01-1.111 2.716 572.849 572.849 0 01-.932-4.129 1.172 1.172 0 00-1.145-.919H5.766a1.172 1.172 0 100 2.345h.78c.276 1.232 1.164 5.193 1.493 6.4a1.366 1.366 0 001.033 1.178 1.178 1.178 0 001.195-.516c.066-.1.129-.2 1.79-4.26l.232.313a1.173 1.173 0 001.883-1.4z"
                fill="#63a7f6"
              />
            </Svg>
          }
        />
        <VitalsCard title="BPM" value={65} color="#ED91FC" />
        <VitalsCard title="BPM" value={65} color="#F85353" />
      </View>
    );
  }
  function renderMedication() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>
            Medications
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>
            Recent Dose
          </Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {medicationData.map((data, i) => (
            <MedicationCard data={data} key={i} />
          ))}
        </ScrollView>
      </>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{
          backgroundColor: '#237D97',
          minHeight: Dimensions.get('window').height,
          paddingVertical: 20,
        }}>
        {renderHeader()}
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          {renderSuggestionButton()}

          {renderSelection()}

          {renderVitals()}

          {renderMedication()}
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: '#D94949',
            marginBottom: 20,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 10,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 16, color: '#ffffff'}}>Alert</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
