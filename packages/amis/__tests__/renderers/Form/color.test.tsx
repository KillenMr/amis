import React = require('react');
import {render, fireEvent} from '@testing-library/react';
import '../../../src';
import {render as amisRender} from '../../../src';
import {makeEnv} from '../../helper';

test('Renderer:color', async () => {
  // TODO: 改成 lazy 暂时不知如何处理
  //   const {container} = render(
  //     amisRender(
  //       {
  //         type: 'form',
  //         api: '/api/xxx',
  //         controls: [
  //           {
  //             type: 'color',
  //             name: 'a',
  //             label: 'color',
  //             value: '#51458f'
  //           }
  //         ],
  //         title: 'The form',
  //         actions: []
  //       },
  //       {},
  //       makeEnv({})
  //     )
  //   );
  //   const input = container.querySelector('input');
  //   expect(input?.value).toEqual('#51458f');
  //   fireEvent.change(input!, {
  //     target: {
  //       value: '#1a1438'
  //     }
  //   });
  //   expect(input?.value).toEqual('#1a1438');
  //   expect(container).toMatchSnapshot();
});

test('Renderer: no color value', async () => {
  const {container} = render(
    amisRender({
      type: 'color',
    })
  );

  const colorValue = container.querySelector('.cxd-ColorField-value');
  expect(colorValue).not.toBeInTheDocument();
});

test('Renderer: defalut color value', async () => {
  const {container} = render(
    amisRender({
      type: 'color',
      defaultColor: '#ccc'
    })
  );

  const colorValue = container.querySelector('.cxd-ColorField-value');
  expect(colorValue).toBeInTheDocument();
});

test('Renderer: color value', async () => {
  const {container} = render(
    amisRender({
      type: 'color',
      value: '#ccc'
    })
  );

  const colorValue = container.querySelector('.cxd-ColorField-value');
  expect(colorValue).toBeInTheDocument();
});
