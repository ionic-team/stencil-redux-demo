import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';

import { appSetName } from '../../actions/app';
import { configureStore } from '../../store/index';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  @State() name: string;

  appSetName: Action;

  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));

    this.store.mapStateToProps(this, (state) => {
      const {
        app: { name }
      } = state;

      return {
        name
      }
    });

    this.store.mapDispatchToProps(this, {
      appSetName
    });
  }

  render() {
    return (
      <div>
        Hello, my name is {this.name}

        <p>
          <input type="text" onInput={(e: any) => this.appSetName(e.target.value)} value={this.name}/>
        </p>
      </div>
    );
  }
}
