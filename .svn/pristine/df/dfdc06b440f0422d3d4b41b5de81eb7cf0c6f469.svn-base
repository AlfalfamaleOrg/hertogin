<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

function inputJSON() {
    $request = @file_get_contents('php://input');;
    $array = json_decode($request, true);
    return $array;
}