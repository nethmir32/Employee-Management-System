package com.example.demo.Model;

public class ErrorResponse {
	private int status;
	private String errMsg;
	
	public ErrorResponse() {
		
	}

	public ErrorResponse(int status, String errMsg) {
		super();
		this.status = status;
		this.errMsg = errMsg;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}
}
