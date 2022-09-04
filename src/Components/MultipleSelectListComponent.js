import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'

const items = [{
  id: '1',
  name: 'Bola'
}, {
  id: '2',
  name: 'Baralho'
}, {
  id: '3',
  name: 'Uno'
}]

const MultipleSelectListComponent = () => {
  const [selectedItems, setselectedItems] = useState([])

  onSelectedItemsChange = (selectedItems) => {
    setselectedItems(selectedItems)
    //console.warn('Selected Items: ', selectedItems)
  }

  return (
    <View style={styles.container}>
      <View style={styles.multiSelectContainer}>
        <MultiSelect
          items={items}
          uniqueKey='id'
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          onChangeInput={(text) => console.warn(text)}
          altFontFamily="Rubik_400Regular"
          itemFontFamily="Rubik_400Regular"
          tagRemoveIconColor='#ffff00'
          tagBorderColor='#ffff00'
          tagTextColor='#fff'
          itemTextColor='#fff'
          // displayKey='name'
          searchInputPlaceholderText='Digite para pesquisar...'
          searchInputStyle={{ color: '#fff', backgroundColor: '#296D98', height: 40, fontWeight: 'bold' }}
          submitButtonColor='#296D98'
          submitButtonText='Selecionar'
          styleListContainer={{ backgroundColor: '#0E2433', borderWidth: 2, borderColor: '#45B6FE', borderRadius: 5 }}
          styleInputGroup={{ backgroundColor: '#296D98', borderWidth: 2, borderColor: '#45B6FE', borderRadius: 5 }}
          // flatListProps={{ backgroundColor: 'red', borderWidth: 5, borderColor: 'orange', borderRadius: 20 }}
          noItemsText="Nenhum outro item disponível"
          selectText='Digite para pesquisar'
          styleDropdownMenuSubsection={{ backgroundColor: '#0E2433', borderWidth: 2, borderColor: '#296D98', borderRadius: 10, height: 50, marginTop: 15, }}
          styleTextDropdown={{ marginLeft: 15, color: '#FFF' }}

          tagContainerStyle={{ marginTop: 15 }}
          removeSelected
        />
      </View>
    </View>
  )

}

export default MultipleSelectListComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiSelectContainer: {
    height: 400,
    width: 320,
    borderRadius: 10,
  }
})