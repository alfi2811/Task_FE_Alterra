import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from './index'

describe('FormCoding', () => {  
  test('renders Form Coding', () => {
    render(<FormCoding />);
    expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument()
    expect(screen.getByRole("textbox", { name: /nama/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText('No Handphone:', {selector: 'input'})).toBeInTheDocument();
  })

  test('calls onChange callback handler and succeed', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox', {name: /nama/i}), {
      target: {value: 'Alfi'}
    })
    fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {
      target: {value: 'Alfi@gmail.com'}
    })
    fireEvent.input(screen.getByLabelText('No Handphone:', {selector: 'input'}), {
      target: {value: '81270285766'}
    })
    expect(screen.getByRole('textbox', {name: /nama/i})).toHaveValue("Alfi")
    expect(screen.getByRole('textbox', {name: /email/i})).toHaveValue("Alfi@gmail.com")
    expect(screen.getByLabelText('No Handphone:', {selector: 'input'})).toHaveValue(81270285766)
  })

  test('calls onChange callback handler and fails', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox', {name: /nama/i}), {
      target: {value: 'agak1234'}
    })
    fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {
      target: {value: 'agak1234'}
    })
    expect.objectContaining(screen.findAllByRole('list'))
    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument()
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument()
  })

  test('succeed submit handler', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});    
    render(<FormCoding />);
    fireEvent.input(screen.getByRole('textbox', {name: /nama/i}), {
      target: {value: 'Alfi'}
    })
    fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {
      target: {value: 'afl@gmail.com'}
    })
    fireEvent.input(screen.getByLabelText('No Handphone:', {selector: 'input'}), {
      target: {value: '081273023222'}
    })
    fireEvent.submit(screen.getByText("Submit"));    
    expect(window.alert).toHaveBeenCalledWith('Data Pendaftar \"Alfi\" Berhasil Diterima')    
  })

  test('fail submit handler', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});    
    render(<FormCoding />);
    fireEvent.input(screen.getByRole('textbox', {name: /nama/i}), {
      target: {value: 'Alfi123'}
    })
    fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {
      target: {value: 'aflgmail.com'}
    })
    fireEvent.input(screen.getByLabelText('No Handphone:', {selector: 'input'}), {
      target: {value: '123aaa'}
    })
    fireEvent.submit(screen.getByText("Submit"));    
    expect(window.alert).toHaveBeenCalledWith('Data Pendaftar Tidak Sesuai')    
  })
})