import { Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import MapView, {Marker ,Polyline} from "react-native-maps";



const OrderScreen = () => {
  const time = moment().format("LT");
  const mapView = useRef(null);
  const [coordinates] = useState([
    {
        latitude: 11.847676,
        longitude: 109.095887,
    },
    {
        latitude: 12.85321,
        longitude: 109.096990
    }
  ])
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates,{
        edgePadding:{
            top:50,
            bottom: 50,
            left: 50,
            right:50
        }
    })
  },[])
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          backgroundColor: "#fc8019",
          padding: 10,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
            Thời gian di chuyển 20 phút
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "600",
              marginTop: 4,
            }}
          >
            Thời gian đến nơi {time}
          </Text>
        </View>
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
          HELP
        </Text>
      </View>
      <MapView
      ref={mapView}
      style={{width:'100%',height:400}}
      >
        <Marker coordinate={coordinates[0]}/>
        <Marker coordinate={coordinates[1]}/>

        <Polyline coordinates={coordinates} strokeColor="black" lineDashPattern={[4]} strokeWidth={1}/>
      </MapView>
      <View
        style={{
          height: 320,
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ fontWeight: "500", fontSize: 17,textAlign:"center", }}>
               Tài xế đã nhận được đơn hàng
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
