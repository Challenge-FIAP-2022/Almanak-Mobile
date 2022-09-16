import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MultiSelect from "react-native-multiple-select";

export const MultipleSelectListComponent = ({ lista, selecionados = [], setSelectedItems}) => {

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
    // console.log(selectedItems);
  };

  return (
    <View style={styles.multiSelectContainer}>
      <View style={styles.container}>
        {/* {console.log(selecionados)} */}
        <MultiSelect
          items={lista}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selecionados}
          selectText="Digite para pesquisar"
          searchInputPlaceholderText="Digite para pesquisar"
          noItemsText="Item não encontrado"
          onChangeInput={(text) => console.log(text)}
          altFontFamily="Rubik_400Regular"
          itemFontFamily="Rubik_400Regular"
          tagRemoveIconColor="#FFFF00"
          tagBorderColor="#FFFF00"
          tagTextColor="#FFF"
          selectedItemTextColor="#FFFF00"
          selectedItemIconColor="#FFFF00"
          itemTextColor="#FFF"
          textColor="#FFF"
          displayKey="name"
          submitButtonColor="#296D98"
          submitButtonText="Selecionar"
          searchInputStyle={{
            //Style do inputText do dropdown
            fontSize: 16,
            color: "#FFF",
            margin: 5,
            backgroundColor: "#296D98",
            fontFamily: "Rubik_400Regular",
          }}
          styleDropdownMenuSubsection={{
            //Style do input antes de virar dropdown
            backgroundColor: "#296D98",
            borderRadius: 10,
          }}
          styleDropdownMenu={{
            justifyContent: "center",
            alignContent: "center",
          }}
          styleRowList={{
            //Style dos itens da lista do dropdown
            backgroundColor: "#0E2433",
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#296D98",
            padding: 5,
            margin: 0,
          }}
          styleSelectorContainer={{
            //Style do container quando vira dropdown
            borderWidth: 2,
            borderColor: "#296D98",
            borderRadius: 10,
          }}
          styleIndicator={{
            //Icone da Direita
            color: "#FFF",
            alignSelf: "center",
          }}
          styleItemsContainer={{
            //Style da lista do dropdown que fica atrás
            backgroundColor: "#0E2433",
          }}
          styleInputGroup={{
            //Style da parte de trás do input quando vira dropdown
            backgroundColor: "#296D98",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 20,
            // flexDirection: "row-reverse",
          }}
          styleTextDropdown={{
            //Style do text na barra de pesquisa antes de virar dropdown
            color: "#FFF",
            paddingHorizontal: 10,
          }}
          styleTextDropdownSelected={{
            color: "#FFF",
            paddingHorizontal: 20,
          }}
        />
      </View>
    </View>
  );
};

// export default MultipleSelectListComponent;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  multiSelectContainer: {
    width: "100%",
  },
});
