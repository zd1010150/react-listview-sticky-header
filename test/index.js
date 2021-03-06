import React from 'react'
import test from 'tape'
import ListHeader from '../src/lib/ListHeader'
import ListItems from '../src/lib/ListItems'
import ReactListView from '../src/ReactListView'
import { data } from './data'
import { styles } from './style'
import { shallow } from 'enzyme'
import { sinon } from 'sinon'

test('----- React Component Tests: ReactListView -----', t => {
  t.plan(3)
  const app = shallow(<ReactListView data={data} headerAttName='headerName' itemsAttName='items' styles={styles} />)
  t.ok(ReactListView instanceof Function, 'should be function')
  t.equal(5, app.find(ListHeader).length, 'should have 5 list headers')
  t.equal(5, app.find(ListItems).length, 'should have 5 list items')
})

test('----- ReactListView state test-----', t => {
  t.plan(2)
  const app = shallow(<ReactListView data={data} headerAttName='headerName' itemsAttName='items' styles={styles} />)
  t.equal(7, app.update().state('events').length, 'should have 7 events in state')
  t.ok(app.update().state('_instances') instanceof Object, 'should render _instances')
})

test('----- React Component Tests: ListHeader -----', t => {
  t.plan(2)
  t.ok(ListHeader instanceof Function, 'should be function')
  const listHeader = {
    width: '383px',
    height: '20px',
    background: 'green',
    color: 'white'
  }
  const listheader = shallow(<ListHeader ref='ListHeader-0' header='listA' styles={listHeader} />)
  t.equal(true, listheader.containsMatchingElement([<div>ListA</div>]))
})

test('----- React Component Tests: ListItems -----', t => {
  t.plan(2)
  t.ok(ListItems instanceof Function, 'should be function')
  const items = [{
    title: 'items1'
  }, {
    title: 'items2'
  }, {
    title: 'items3'
  }, {
    title: 'items4'
  }, {
    title: 'items5'
  }, {
    title: 'items6'
  }]
  const listItems = {
    color: 'blue'
  }
  const listitems = shallow(<ListItems items={items} styles={listItems} />)
  t.equal(true, listitems.containsMatchingElement([<span>items1</span>]))
  t.end()
})
