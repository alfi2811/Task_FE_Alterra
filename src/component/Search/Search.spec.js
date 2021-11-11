import React from 'react';
import { render, screen, fireEvent, act } from "@testing-library/react";
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import Search from './index'

jest.mock('axios')

describe('FormCoding', () => {
  test('renders Form Coding', () => {
    render(<Search />);

    let text = screen.getByRole('heading', { name: /cari cerita/i })
    expect(text).toBeInTheDocument()
  })

  test('Change input text', () => {
    render(<Search />);
    let inputText = screen.getByRole('textbox')
    fireEvent.input(inputText, {
      target: {value: 'Alfi'}
    })
    expect(inputText).toHaveValue("Alfi")
  })

  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
      { objectID: '3', title: 'Framework' },
    ];
 
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );
 
    render(<Search />);
 
    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });    
 
    const items = await screen.findAllByRole('listitem');
 
    expect(items).toHaveLength(3);
  });

  test('fetches stories from an API and fails', async () => {    
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    );
 
    render(<Search />);
 
    await act(async () => {
      await userEvent.click(screen.getByRole('button'))      
    });    
 
    const message = await screen.findByText(/Ada yang error/);;
 
    expect(message).toBeInTheDocument();
  });
})